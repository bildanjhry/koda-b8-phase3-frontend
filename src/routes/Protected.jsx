import { useLocation, useNavigate, Navigate } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Protected({children}){
    const { session } = useSelector(
        state => state.session
    )
    if (!session.id) {
        return <Navigate to="/" replace />
    }

    return children

}