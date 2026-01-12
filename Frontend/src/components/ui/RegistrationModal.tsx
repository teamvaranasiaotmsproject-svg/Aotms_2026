import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import axios from 'axios';
import { toast } from 'sonner';

interface RegistrationModalProps {
  itemName: string;
  isOpen: boolean;
  onClose: () => void;
  eventType?: 'hackathon' | 'workshop';
}

export const RegistrationModal = ({ itemName, isOpen, onClose, eventType = 'workshop' }: RegistrationModalProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState(''); // Treating as 'course' or additional info
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post('http://localhost:5000/api/registrations', {
        name,
        email,
        eventName: itemName,
        eventType,
        // Passing phone and course if backend supported, currently backend has minimal schema
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setCourse('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle>Register for {itemName}</DialogTitle>
              <DialogDescription>
                Fill out the form below to register. Our team will get in touch with you shortly.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid gap-4 py-4">
              <Input
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSubmitting}
                required
              />
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                required
              />
              <Input
                id="phone"
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={isSubmitting}
                required
              />
              <Input
                id="course"
                placeholder="Your Current Course / Year"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                disabled={isSubmitting}
                required
              />
              <DialogFooter>
                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold"
                  disabled={isSubmitting}
                >
                  {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Submit Registration
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-8">
            <DialogHeader>
              <DialogTitle className="text-2xl text-green-600">Registration Successful!</DialogTitle>
              <DialogDescription>
                Thank you for registering for {itemName}. We have received your details and will be in touch soon.
              </DialogDescription>
            </DialogHeader>
            <Button onClick={handleClose} className="mt-4">Close</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
