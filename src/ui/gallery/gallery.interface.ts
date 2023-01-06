import { IMovie } from './../../api/api.interface';

export interface IGalleryItem extends IMovie {
    link: string
}

export interface IGalleryItemProps {
    item: IGalleryItem
}