// import { createSelector } from '@reduxjs/toolkit';

export const selectorAdverts = state => state.adverts.items;

export const selectorCurrentAdverts = state => state.adverts.currentItems;

export const selectorIsLoading = state => state.adverts.isLoading;

export const selectorFiter = state => state.adverts.error;
