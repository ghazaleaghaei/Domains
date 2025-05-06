import { useEffect, useRef } from "react";

export default function useOutsideClick(handler, listenCapturing = true) {
    const modalRef = useRef()
    const toggleRef = useRef();

    useEffect(() => {
        function handleClick(e) {
            if (modalRef.current &&
                !modalRef.current.contains(e.target) &&
                toggleRef.current &&
                !toggleRef.current.contains(e.target)
            ) {
                handler();
            }
        }

        document.addEventListener("click", handleClick, listenCapturing);

        return () => document.removeEventListener("click", handleClick, listenCapturing);

    }, [handler, listenCapturing])
    return { modalRef, toggleRef };
}
