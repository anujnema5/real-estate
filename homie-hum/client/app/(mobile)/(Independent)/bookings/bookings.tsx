'use client'
import { Icons } from '@/components/icons';
import Loading from '@/components/mobile/ui/loading';
import NoDataFallBack from '@/components/mobile/ui/no-data-fallback';
import { Button } from '@/components/ui/button';
import { useGetEntity } from '@/hooks/useGetEntity'
import { usePathname } from 'next/navigation';

const Orders = () => {
    const { getBookings } = useGetEntity()
    const { status, isError, isFetching, isSuccess, data, isLoading } = getBookings();
    const pathname = usePathname();

    if (isLoading) {

        return (
            <Loading />
        )
    }

    if (!data?.data.length) {
        return (
            <NoDataFallBack />
        )
    }

    // TODO
}

export default Orders