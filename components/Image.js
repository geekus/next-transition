import {motion} from 'framer-motion'

const Image = (props) => {
  const {src} = props

  return (
    <motion.div layoutId="item-image-container" className="item-image-container">
      <motion.img layoutId="item-image" src={src} />
    </motion.div>
  )
}

export default Image
