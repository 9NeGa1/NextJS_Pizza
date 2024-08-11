import { Categories, Container, Filters, ProuctsGroupList, SortPopup, Title, TopBar } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { prisma } from "@/prisma/prisma-client";




export default async function Home() {

  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          items: true,
          ingredients: true
        }
    }
}});

  return (
    <>
    <Container className="mt-10">
      <Title size="lg" className="font-extrabold" text="Все пиццы" />
    </Container>

    <TopBar categories={categories.filter(category => category.products.length > 0)}/>

    <Container className="pb-14 mt-10">
      <div className="flex gap-[80px]">
        {/* Фильтрация */}

        <div className="w-[250px]">
        <Filters/>
        </div>

        {/* Список товаров */}
        <div className="flex-1">
          <div className="flex flex-col gap-16">
            {
              categories.map(category => (
                category.products.length > 0 && (
                  <ProuctsGroupList
                    key={category.id}
                    title={category.name}
                    items={category.products}
                    categoryId={category.id}
                  />
                )
              ))

              
            }
          </div>
        </div>

      </div>
    </Container>
    </>
  );
}
