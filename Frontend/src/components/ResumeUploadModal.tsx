import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { toast } from "sonner";

interface ResumeUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  position: string;
  isInternshipMode?: boolean;
}

export const ResumeUploadModal = ({
  isOpen,
  onClose,
  position,
  isInternshipMode,
}: ResumeUploadModalProps) => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    resume: File | null;
    subject: string;
    internshipType: string;
    internshipDuration: string;
    coverLetter: string;
  }>({
    name: "",
    email: "",
    phone: "",
    resume: null,
    subject: "",
    internshipType: "Short Term",
    internshipDuration: "3 Months",
    coverLetter: "",
  });

  const isInternship = isInternshipMode || false;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email))
      return "Valid email is required";
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone))
      return "Valid 10-digit phone number is required";
    if (position === "General Application" && !formData.subject.trim())
      return "Position/Subject is required";
    if (!isInternship && !formData.resume) return "Please upload your resume";
    return null;
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      validateAndSetFile(files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      validateAndSetFile(files[0]);
    }
  };

  const validateAndSetFile = (file: File) => {
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (validTypes.includes(file.type)) {
      setFormData({ ...formData, resume: file });
    } else {
      toast.error("Invalid file type. Please upload PDF or Word document.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    setIsSubmitting(true);
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);

      // If General Application, use the custom subject as position, otherwise use the fixed position
      const finalPosition =
        position === "General Application" ? formData.subject : position;
      data.append("position", finalPosition);

      // Add internship details if applicable
      if (isInternship || finalPosition.toLowerCase().includes("intern")) {
        data.append("internshipType", formData.internshipType);
        data.append("internshipDuration", formData.internshipDuration);
      }

      if (formData.resume) {
        data.append("resume", formData.resume);
      }

      await axios.post(`${import.meta.env.VITE_API_URL}/api/applynow`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setIsSuccess(true);
      toast.success("Application submitted successfully!");
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          resume: null,
          subject: "",
          internshipType: "Short Term",
          internshipDuration: "3 Months",
          coverLetter: "",
        });
      }, 2000);
    } catch (error: unknown) {
      console.error("Application error:", error);
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message || "Failed to submit application",
        );
      } else {
        toast.error("Failed to submit application");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative my-8"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0075CF] to-[#0066CC] p-4 md:p-5 text-white relative flex-shrink-0">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 p-1.5 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <h2 className="text-xl md:text-2xl font-bold mb-0.5">Apply Now</h2>
              {/* Hide position text if it's General Application, as the user will type it */}
              {position !== "General Application" && (
                <p className="text-blue-100 text-xs md:text-sm font-medium">
                  Position: {position}
                </p>
              )}
            </div>

            {/* Body */}
            <div className="p-4 md:p-6 overflow-y-auto custom-scrollbar flex-1 max-h-[75vh]">
              {isSuccess ? (
                <div className="text-center py-8">
                  {/* ... success state ... */}
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Application Sent!
                  </h3>
                  <p className="text-sm text-slate-600">
                    Thanks for applying. Our team will review your application
                    and get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  {/* Show Subject/Position input ONLY if General Application */}
                  {position === "General Application" && (
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Applying For / Position
                      </label>
                      <Input
                        placeholder="e.g. Intern, Designer, Developer"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="h-10 rounded-lg bg-slate-50 border-slate-200 px-3 text-sm"
                      />
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Full Name
                    </label>
                    <Input
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="h-10 rounded-lg bg-slate-50 border-slate-200 px-3 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Email Address
                      </label>
                      <Input
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="h-10 rounded-lg bg-slate-50 border-slate-200 px-3 text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Phone Number
                      </label>
                      <Input
                        placeholder="9999999999"
                        value={formData.phone}
                        onChange={(e) => {
                          const val = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 10);
                          setFormData({ ...formData, phone: val });
                        }}
                        className="h-10 rounded-lg bg-slate-50 border-slate-200 px-3 text-sm"
                      />
                    </div>
                  </div>

                  {isInternship && (
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                          Internship Type
                        </label>
                        <Select
                          value={formData.internshipType}
                          onValueChange={(value) =>
                            setFormData({ ...formData, internshipType: value })
                          }
                        >
                          <SelectTrigger className="w-full h-10 rounded-lg bg-slate-50 border-slate-200 px-3 text-sm">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Short Term">
                              Short Term
                            </SelectItem>
                            <SelectItem value="Long Term">Long Term</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                          Duration
                        </label>
                        <Select
                          value={formData.internshipDuration}
                          onValueChange={(value) =>
                            setFormData({
                              ...formData,
                              internshipDuration: value,
                            })
                          }
                        >
                          <SelectTrigger className="w-full h-10 rounded-lg bg-slate-50 border-slate-200 px-3 text-sm">
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1 Month">1 Month</SelectItem>
                            <SelectItem value="2 Months">2 Months</SelectItem>
                            <SelectItem value="3 Months">3 Months</SelectItem>
                            <SelectItem value="6 Months">6 Months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {!isInternship && (
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Resume Upload
                      </label>
                      <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`
                                                    relative border-2 border-dashed rounded-xl p-4 md:p-5 text-center transition-all cursor-pointer
                                                    ${isDragging
                            ? "border-[#0075CF] bg-blue-50"
                            : "border-slate-200 hover:border-blue-400 hover:bg-slate-50"
                          }
                                                    ${formData.resume
                            ? "bg-green-50 border-green-200"
                            : ""
                          }
                                                `}
                      >
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />

                        {formData.resume ? (
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                              <CheckCircle className="w-5 h-5" />
                            </div>
                            <p className="text-sm font-bold text-slate-900 truncate max-w-[200px]">
                              {formData.resume.name}
                            </p>
                            <p className="text-[10px] text-green-600 font-medium">
                              Ready to upload
                            </p>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-[#0075CF]">
                              <Upload className="w-4 h-4" />
                            </div>
                            <p className="text-xs md:text-sm font-bold text-slate-900">
                              Click to upload or drag & drop
                            </p>
                            <p className="text-[10px] text-slate-400">
                              PDF, Word (max 5MB)
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="pt-2 md:pt-4">
                    <Button
                      type="submit"
                      className="w-full h-10 md:h-11 rounded-xl bg-[#0075CF] hover:bg-[#0066CC] text-white font-bold text-sm md:text-base shadow-lg flex items-center justify-center gap-2 transform active:scale-[0.98] transition-all"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          Submit Application
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
};
