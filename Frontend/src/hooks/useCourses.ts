import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface CourseModule {
  _id: string;
  title: string;
  lessons: string[];
}

export interface Course {
  _id: string;
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  duration: string;
  level: string;
  trainer: string;
  price: string;
  originalPrice: string;
  rating: number;
  themeColor: string;
  curriculum: CourseModule[];
}

const fetchCourses = async (): Promise<Course[]> => {
  const { data } = await axios.get('http://localhost:5000/api/courses');
  return data;
};

const fetchCourseBySlug = async (slug: string): Promise<Course> => {
  const { data } = await axios.get(`http://localhost:5000/api/courses/${slug}`);
  return data;
};

export const useCourses = () => {
  return useQuery({
    queryKey: ['courses'],
    queryFn: fetchCourses,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useCourseBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['course', slug],
    queryFn: () => fetchCourseBySlug(slug),
    enabled: !!slug,
  });
};
