import { useEffect, useState } from "react";
import { importJson } from "../utils/general";

function useGetBooks({ isFeatured = false, searchText = '' } = {}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);
      setData([]);
      try {
        const res = await importJson('data.json');
        if (isFeatured) {
          setData(res?.data?.filter((item) => item?.featured));
        } else if (searchText) {
          setData(res?.data?.filter((item) => {
            if (item?.title?.toLowerCase()?.includes(searchText?.toLowerCase())) return true;
            return false;
          }));
        } else {
          setData(res?.data);
        }
      } catch(error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [isFeatured, searchText]);

  return { loading, data, error }
}

export default useGetBooks;
