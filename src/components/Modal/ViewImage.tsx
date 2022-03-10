import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => onClose()}
      isCentered
      trapFocus={false}
    >
      <ModalOverlay />
      <ModalContent bgColor="pGray.800" borderBottomRadius="6px">

        <ModalBody p="0"  maxWidth="900px" maxHeight="600px">
          <Image src={imgUrl} objectFit="cover" alt="image" width="100%" maxHeight="600px"/>
        </ModalBody>

        <ModalFooter justifyContent="flex-start" width='auto'>
          <Link href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalFooter>

      </ModalContent>
    </Modal>
  );

}
