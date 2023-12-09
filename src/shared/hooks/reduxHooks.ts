import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@core/store/types/store.types';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = useDispatch<AppDispatch>;
