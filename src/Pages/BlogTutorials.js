import Introduction from "../components/pragraphs/Introduction";
import DividerOpecity from "../components/dividers/DividerInlineopecity";
import CarouselBlog from "../components/carousel/carouselBlog";

export default function BlogTutorials() {
  return (
    <>
      <Introduction 
        section={"Blog"} 
        title={"Blog & Tutorials"} 
        subTitle={`I share with you some articles and practical explanations that I have prepared.`}
      />

      <DividerOpecity />

      <CarouselBlog />
{/* 
      <div className={"carousel-Blog"}>
        
      </div> */}
    </>
  )
}
