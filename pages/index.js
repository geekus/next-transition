import Link from 'next/link'
import {motion} from 'framer-motion'

import Image from '../components/Image'
import data from '../data'

const Item = (props) => {
  const {id, slug, title, description, image} = props

  return (
    <div className="item item-container item-closed">
      <div className="byline">
        <strong>Shared</strong> by you
      </div>
      <Image src={`/images/${image}`} />
      <motion.div
        initial={{scale: 0.9}}
        animate={{scale: 1}}
        transition={{duration: 0.3}}
      >
        <h2>
          {title}
        </h2>
        <p className="description">{description}</p>
      </motion.div>
      <Link href={`/show/${slug}`}>
        <motion.a
          className="action expand"
          initial={{scale: 0.6, opacity: 0.5}}
          animate={{scale: 1, opacity: 1}}
          transition={{duration: 0.3}}
        >
          擴
        </motion.a>
      </Link>
    </div>
  )
}

const Index = () => {
  return (
    <div className="items">
      {data.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          slug={item.slug}
          title={item.title}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  )
}

export default Index
