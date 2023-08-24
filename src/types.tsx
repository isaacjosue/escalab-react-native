import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Detail: { movieId: number };
};
export type Navigation = NativeStackNavigationProp<RootStackParamList>;

export type Route = RouteProp<RootStackParamList>;
export type RouteWithParams<Routes extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, Routes>;

export type MovieType = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
};
export type MovieDetailType = MovieType & {
  backdrop_path: string;
  genres: {
    id: number;
    name: string;
  }[];
  original_language: string;
  original_title: string;
  overview: string;
  production_companies: CompanyType[];
  budget: number;
  revenue: number;
  runtime: number;
  tagline: string;
  status: string;
};
export type CompanyType = {
  id: number;
  logo_path: string;
  name: string;
  images: {
    logos: any[];
  };
};
