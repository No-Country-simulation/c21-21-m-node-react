"use client"
import { useState, useEffect } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Container from '@/app/components/Container';
import Payment from '@/app/components/investment/Payment';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/app/contexts/UserContext';

const InvestmentPaymentPage = ({ params }) => {
    const { isLoading } = useUserContext();
    const { id } = params;
    const router = useRouter();
    const [queryParams, setQueryParams] = useState({});

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const title = urlParams.get('title');
        const img = urlParams.get('img');
        const current_amount = urlParams.get('current_amount');
        const percentage = urlParams.get('percentage');

        setQueryParams({ title, img, current_amount, percentage });
    }, [router.asPath]);
    
    return (
        <>
            <Navbar isLoading={isLoading} />
            <Container>
                <Payment id={id} queryParams={queryParams} />
            </Container>
            <Footer />
        </>
    );
};

export default InvestmentPaymentPage;
