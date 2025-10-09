
export default function Avatar({title, boxName, name, path, description, load}) {

  return (
    <>
        {
            // boxName = !null?
                <div className={boxName}>
                    { path && load && description !==null?
                        <img title={title} src={path} alt={description} className={name} loading={load} /> : <></>
                    }
                </div>
            // :
            //     <></>
        }
    </>
  )
}
