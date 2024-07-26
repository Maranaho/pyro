import Lottie from 'react-lottie-player'
import flame from "../assets/lottie/flame.json"
const Loading = () => (
    <Lottie
        loop play
        animationData={flame}
        style={{ width: 150, height: 150 }}
    />
)

export default Loading