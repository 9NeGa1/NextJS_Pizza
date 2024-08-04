import { Categories, Container, Filters, ProuctsGroupList, SortPopup, Title, TopBar } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";




export default function Home() {
  return (
    <>
    <Container className="mt-10">
      <Title size="lg" className="font-extrabold" text="Все пиццы" />
    </Container>

    <TopBar/>

    <Container className="pb-14 mt-10">
      <div className="flex gap-[80px]">
        {/* Фильтрация */}

        <div className="w-[250px]">
        <Filters/>
        </div>

        {/* Список товаров */}
        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProuctsGroupList title="Пиццы"
            categoryId={1}
            items={
              [
                {id: 1, name: "Пицца 1", price: 300, imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif"},
                {id: 2, name: "Пицца 2", price: 300, imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif"},
                {id: 3, name: "Пицца 3", price: 300, imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif"},
                {id: 4, name: "Пицца 4", price: 300, imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif"},
                {id: 5, name: "Пицца 5", price: 300, imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif"},
              ]
            }
            />
            <ProuctsGroupList title="Комбо"
            categoryId={2}
            items={
              [
                {id: 1, name: "Пицца 1", price: 300, imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif"},
                {id: 2, name: "Пицца 2", price: 300, imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif"},
                {id: 3, name: "Пицца 3", price: 300, imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif"},
                {id: 4, name: "Пицца 4", price: 300, imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif"},
                {id: 5, name: "Пицца 5", price: 300, imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif"},
              ]
            }
            />
          </div>
        </div>

      </div>
    </Container>
    </>
  );
}
