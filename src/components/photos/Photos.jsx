import { useContext, useEffect, useRef } from "react"
import { GlobalContext } from "../../GlobalStorage"
import styles from "./Photos.module.css"
import { observerPhotos } from "../../functions/moveElement"

function Photos({fil}) {
  const {data, category} = useContext(GlobalContext)

  const refImgs = useRef(null)
  

  useEffect(()=>{
    const imgs = refImgs.current?.querySelectorAll("img")
    imgs?.forEach(item=>observerPhotos.observe(item))
  },[data,category])
  

  if(data.length === 0) return null

  return (
    <div className={styles.photos} ref={refImgs}>
      {data[fil]?.map((item)=>(
        <img src={item.foto} alt={item.alt} width={300} key={item.id}/>
      ))}
    </div>
  )
}

export default Photos