import { atom } from "recoil"

export const CartItemAtom = atom({
    key:'',
    default:[]// = useState([])
})
//Atom에는 기본적으로 key와 default값을 갖는다
//key는 atom의 이름이라고 생각하면됨 -> 전역적으로 유일한 값이어야함(이름이 중복되어서는 안됨)
//Recoil의 문법 const [state,setState] = useRecoilState()