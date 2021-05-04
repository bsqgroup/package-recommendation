import { IPackage } from 'types/packages.interface';

export interface IAnswer {
    id: number;
    sort: number;
    letter: 'A' | 'B' | 'C';
    answer: string;
    recommended_package: IPackage;
    optional_package?: IPackage | null;
}