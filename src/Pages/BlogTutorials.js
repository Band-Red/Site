import Introduction from "../components/pragraphs/Introduction";
import DividerOpecity from "../components/dividers/DividerInlineopecity";

export default function BlogTutorials() {
  return (
    <>
      <Introduction 
        section={"Blog"} 
        title={"Blog & Tutorials"} 
        subTitle={`I share with you some articles and practical explanations that I have prepared.`}
      />

      <DividerOpecity />

      <div className={"carousel-Blog"}>
        
      </div>
    </>
  )
}
