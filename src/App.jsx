import { useState, useEffect } from 'react';
import axios from "axios";
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import SearchBar from './components/searchBar/SearchBar';
import ImageGallery from './components/imageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/loader/Loader';
import ErrorMessage from './components/errorMessage/ErrorMessage';
import ImageModal from './components/imageModal/ImageModal';

export default function App() {
  const [query, setQuery] = useState("");
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const modalOpen = (item) => {
    if (!modalIsOpen) {
    setModalImage(item);
    setModalIsOpen(true);
    }
  };

  const modalClose = () => {
    setModalIsOpen(false);
  };

  const fetchData= async (searchQuery, pageNumber = 1)  => {
    try {
      setLoading(true);
    const URL = "https://api.unsplash.com/search/photos";
    const param = new URLSearchParams({
      client_id: "B56zHmNn7jzd0PijgheiRWMg7msK8-yeejiQqq_z-sA",
      query: searchQuery,
      per_page: 12,
      page: pageNumber
    });

    const response = await axios.get(`${URL}?${param}`);

    if (response.data.results.length === 0 && pageNumber === 1) {
      toast.error("Nothing to show")
    };

    setGallery(prev => [...prev, ...response.data.results]);
    setTotalResult(response.data.total); 

    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setGallery([]);
    fetchData(searchQuery, 1);
  };

  const handleClick = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchData(query, nextPage);
  };

  const canLoadMore = gallery.length < totalResult;

  useEffect(() => {
    if (page > 1) {
      window.scrollBy({
        top: window.innerHeight * 0.8,
        behavior: "smooth",
      })
    }
  }, [gallery, page]);

  return (
    <div>
      <Toaster 
      position="top-center"
      reverseOrder={false}/>
      <SearchBar 
      query={query} 
      setQuery={setQuery} 
      handleSubmit={handleSubmit}/>
      {gallery.length > 0 && <ImageGallery 
      gallery={gallery} 
      modalOpen={modalOpen} />}
      {error && <ErrorMessage />}
      {gallery.length > 0  && 
      canLoadMore && 
      <LoadMoreBtn 
      onClick={handleClick}/>}
      {loading && <Loader 
      loading={loading}/>}
      {modalIsOpen && <ImageModal 
      modalIsOpen={modalIsOpen} 
      item={modalImage} 
      modalClose={modalClose}/>}
    </div>
  )
}