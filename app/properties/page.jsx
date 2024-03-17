import properties from '@/properties.json';
import PropertyCard from '@/components/PropertyCard';

const PropertiesPage = () => {
  return (
    <section class="px-4 py-6">
      <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-blue-500 mb-6 text-center">All Properties</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {
          properties.length === 0 ? 
          (<p>No properties found</p>) :
          properties.map((property) => (
            <PropertyCard name={property.name}/>
          ))
        }
      </div>
      </div>
    </section>
  )
};

export default PropertiesPage;