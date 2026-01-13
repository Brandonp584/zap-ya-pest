export default function ServicesPage() {
    const services = [
        {
            title: "General Pest Control",
            description:
                "Comprehensive pest control solutions to keep your home and business pest-free year-round.",
        },
        {
            title: "Termite Insection & Treatment",
            description:
                "Protect your property from costly termite damage with expert inspections and treatments.",
        },
        {
            title: "Rodent Control",
            description:
                "Effective rodent removal and prevention to keep your space safe and Hygienic"
        },
        {
            title: "Spider & Insect Control",
            description: "Targeted treatments to eliminate spiders, ants, cockroaches, and other insects.",
        },
    ];

    return (
        <main className="min-h-screen px-6 py-20">
            <h1 className="text-4x1 font-bold text-center mb-12">
                Our Pest Control Services
            </h1>

            <div className="grid gap-8 max-w-6x1 mx-auto md:grid-cols-2">
                {services.map((service) => (
                    <div
                    key={service.title}
                    className="border rounded-lg p-8 hover:shadow-lg transition">
                        <h2 className="text-2x1 font-semibold mb-4">
                            {service.title}
                        </h2>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}