import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

interface Data {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface fetchImageResponse {
  after: string | null;
  data: Array<Data>;
}

export default function Home(): JSX.Element {

  async function fechImage({pageParam = null}):Promise<fetchImageResponse> {
    const { data } = await api.get<fetchImageResponse>('/api/images', {
      params: {
        after: pageParam,
      },
    });
    return data;
  }


  
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images', fechImage, {
      getNextPageParam(lastPage, _allPages) {
        if (lastPage.after)
          return lastPage.after
        return null
      }
    }
  );

  const formattedData = useMemo(() => {
    const arrayData = data?.pages.flatMap(page => page.data);
    return arrayData;
  }, [data]);

  if (isLoading) {
    return <Loading/>
  }

  if (isError) {
    return <Error/>
  }

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {
          hasNextPage &&
          <Button onClick={() => fetchNextPage()}>
              {isFetchingNextPage ? "Carregando..." : "Carregar mais"}
          </Button>
        }
      </Box>
    </>
  );
}
