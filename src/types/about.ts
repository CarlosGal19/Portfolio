import {  Certification } from './certification';

export interface AboutProps {
    title: string;
    description: string;
    currentStack: string;
    stack: string;
    certificationsTitle: string;
    certifications: Certification[];
}
