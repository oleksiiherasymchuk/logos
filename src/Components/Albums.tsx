import React, { useEffect } from "react";
import style from "./Components.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Album, Post, getAlbumsThunk } from "../redux/userReducer";
import { AppDispatch, AppStateType } from "../redux/store";

const Albums = () => {
  const albums = useSelector((store: AppStateType): Post[] | [] => store.user.albums);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbumsThunk())
  }, [dispatch]);

  return <div className={style.child}>
    <h1>Albums</h1>
    {albums.map((album: Album) => <p key={album.id}>{album.id}. {album.title}</p>)}
  </div>;
};

export default Albums;