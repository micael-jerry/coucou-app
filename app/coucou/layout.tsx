import CoucouLayout from '@/components/features/coucou/layout/coucou-layout';
import React from 'react';

interface CoucouSegmentLayoutProps {
	children: React.ReactNode;
}

/**
 * Minimal server layout — auth is enforced by middleware.
 * All context/session/data logic lives inside CoucouLayout ('use client').
 */
export default function CoucouSegmentLayout({ children }: Readonly<CoucouSegmentLayoutProps>) {
	return <CoucouLayout>{children}</CoucouLayout>;
}
