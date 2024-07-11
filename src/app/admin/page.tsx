import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import db from '@/db/db';


async function getSalesData() {
    const data = await db.order.aggregate({
        _sum: {pricePaidInCents: true},
        _count: true,
    })
    return {
        totalSales: (data._sum.pricePaidInCents ?? 0) / 100,
        totalOrders: data._count,
    }

}

export default async function AdminDashboard() {
    const salesData = await getSalesData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            <DashboardCard title='Sales' description={salesData.totalSales} body={salesData.totalOrders} />
            
        </div>
    )
}

type DashboardCardProps = {
    title: string;
    description: string;
    body: string;
}

function DashboardCard({title, description, body}: DashboardCardProps) {

    return (

        <Card>
            <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            </CardHeader>

            <CardContent>
            <p>{body}</p>
            </CardContent>

        </Card>

    );
}