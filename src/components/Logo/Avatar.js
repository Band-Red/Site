
export default function Avatar({title, boxName, name, path, description, load}) {

  return (
    <>
        {
            // boxName = !null?
                <div className={boxName}>
                    {/* { path && load && description !==null? */}
                        <span title={title} alt={description} className={name} /> {/*: <></>*/}
                    {/* } */}
                </div>
            // :
            //     <></>
        }
    </>
  )
}
{/* <img title={title} src={path} alt={description} className={name} loading={load} /> : <></> */}
