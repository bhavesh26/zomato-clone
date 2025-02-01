import { Search } from "./Search";
import { categoryDetails, collectionsData, popularPlaces } from "../assets/constant";
import { CategoryCard } from "./CatergoryCard";

export const HomePage = () => {
  return (
    <div>
      <div className="h-[60vh] bg-cover  w-full bg-center bg-zomato-bg sc">
        <div className="flex justify-center items-center w-full flex-col">
          <div className="mt-[121px]">
            <img className="h-14 w-30" src="src/assets/zomatologo.avif" />
          </div>
          <div className="mt-[3rem]">
            <p className="ft text-4xl text-center text-white font-normal leading-3">
              {" "}
              Discover the best food & drink in{" "}
              <span className="font-normal">Surat</span>
            </p>
          </div>
          <div className="w-[60%] mt-[3rem]">
            <Search />
          </div>
        </div>
      </div>
      {/* category banner */}
      <div className="flex mt-12 w-4/5 mx-auto ">
        <div className="flex w-[80%]  h-[18rem] w-auto overflow-hidden  ">
          {categoryDetails.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
      {/* collections card */}
      <div className="w-4/5 mx-auto  mt-6">
        <h2 className="text-4xl ft" >Collections</h2>
        <div className="mb-8">
            <p className="text-xl mt-2 font-extralight">Explore curated lists of top restaurants, cafes, pubs, and bars in Surat, based on trends</p>

        </div>
        <div className="flex justify-space">
            {collectionsData.map((collections)=> (
                <div className="bg-cover mr-4"> 
                    <img  className="rounded-xl h-[18rem] w-auto" src={collections.img}/>
                    <p>{collections.text}</p>
                </div>
            ))}
        </div>
      </div>

      {/* popular places grid */}
      <div className="w-4/5 mx-auto mt-10">
      <p className="text-3xl ft mb-[3rem]">Popular localities in and around Surat</p>
      <div className="grid grid-cols-3 gap-4 pt-4 pb-4 pr-4 pl-0">
      {
        popularPlaces.map((place)=> (
            <div className="border p-4 rounded-xl">
                <p className="text-xl">{place.place}</p>
                <p className="font-extralight"> {place.count} places</p>
                </div>
        ))
      }
      <div className="p-4 flex justify-center items-center rounded-xl border">
        <p> See more</p>

      </div>
      </div>
      </div>
    </div>
  );
};
