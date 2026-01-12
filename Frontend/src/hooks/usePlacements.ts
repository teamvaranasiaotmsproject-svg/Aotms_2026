import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface StudentPlacement {
    _id: string;
    name: string;
    jobTitle: string;
    companies: string[];
    image: string;
}

export interface DetailedPlacement {
    _id: string;
    consultantName: string;
    jobTitle: string;
    client: string;
    startDate: string;
    duration: string;
    location: string;
    salary: string;
}

const fetchStudentPlacements = async (): Promise<StudentPlacement[]> => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/placements/students`);
    return data;
};

const fetchDetailedPlacements = async (): Promise<DetailedPlacement[]> => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/placements/detailed`);
    return data;
};

export const useStudentPlacements = () => {
    return useQuery({
        queryKey: ['placements', 'students'],
        queryFn: fetchStudentPlacements,
        staleTime: 5 * 60 * 1000,
    });
};

export const useDetailedPlacements = () => {
    return useQuery({
        queryKey: ['placements', 'detailed'],
        queryFn: fetchDetailedPlacements,
        staleTime: 5 * 60 * 1000,
    });
};
