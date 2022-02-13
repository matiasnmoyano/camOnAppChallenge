import { getStorage, ref } from "firebase/storage";

const storage = getStorage();

const mountainImagesRef = ref(storage, 'images/mountains.jpg');

export default function uploadFiles () {
    
}