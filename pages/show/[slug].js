import {useRouter} from 'next/router'
import Link from 'next/link'
import {motion} from 'framer-motion'

import Image from '../../components/Image';
import data from '../../data'

const Show = (props) => {
  const router = useRouter()
  const {slug} = router.query

  const item = data.find((i) => i.slug === slug)

  // Initial render if accessed directly is missing slug 🤔
  if (! slug) {
    return <div>404</div>
  }

  return (
    <motion.div layoutId="item" className="item item-container item-open">
      <Link href="/">
        <a className="action collapse">
          &times;
        </a>
      </Link>
      <Image src={`/images/${item.image}`} />
      <motion.h1
        className="item-title"
        animate={{y: -32, opacity: 1}}
        transition={{duration: 0.2, type: 'spring', stiffness: 100}}
      >
        {item.title}
      </motion.h1>
      <motion.p
        className="item-author"
        animate={{y: -24, opacity: 1}}
        transition={{duration: 0.2, type: 'spring', stiffness: 100, delay: 0.1}}
      >
        By {item.author}
      </motion.p>
    </motion.div>
  )
}

export default Show
