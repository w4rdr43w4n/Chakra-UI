import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react"

export default function CustomModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique eligendi expedita quidem quam cum, provident minus explicabo quaerat rem repudiandae dolore porro magni amet odio itaque sequi placeat reiciendis modi.
            Sunt ipsam assumenda nostrum. Maxime dolorem commodi, voluptatem natus nesciunt modi voluptatum veniam at, praesentium ad possimus quibusdam soluta quidem! Soluta possimus doloremque ipsum totam ad iure saepe placeat ipsam?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}