import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [imgUrl, setImgUrl] = useState('');

  function haddleImgUrl(url: string) {
    setImgUrl(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid
        maxW="60.125rem"
        templateColumns="repeat(auto-fill, 18rem)"
        gap="2.5rem"
        mb="2.5rem"
      >
        {
          cards.map(card => {
            const { id ,ts, url, title, description } = card;
            return (
              <Card
                key={id}
                data={{ ts, url, title, description }}
                viewImage={haddleImgUrl}
              />
            )
          })
        }
      </SimpleGrid>
     
      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imgUrl}/>
    </>
  );
}
