import { Search } from "./Search";
import { categoryDetails } from "../assets/constant";
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
      <div className="flex justify-center items-center mt-12">
        <div className="flex w-[80%]  justify-space h-[18rem] w-auto overflow-hidden ">
        {categoryDetails.map((category)=> (
        
            <CategoryCard key={category.id} {...category}/>
            
        ))}
        </div>
        
      </div>
    </div>
  );
};
