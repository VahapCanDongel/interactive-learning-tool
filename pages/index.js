import {
  Button,
  Modal,
  Text,
  Input,
  Row,
  Checkbox,
  Mail,
  Password,
} from "@nextui-org/react/button";
import ClassRoomCard from "@/components/ClassRoomCard";
import { useState } from "react";

export default function Home() {
  const [visible, setVisibile] = useState(false);
  const handler = () => setVisibile(true);

  const closeHandler = () => setVisibile(false);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid grid-cols-2 gap-4 overflow-auto">
        <ClassRoomCard />
        <ClassRoomCard />
        <ClassRoomCard />
      </div>

      <div className="absolute bottom-0  right-0 m-2">
        <Button shadow color="gradient" onClick={handler}>
          Add Class
        </Button>
        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Welcome to
              <Text b size={18}>
                NextUI
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Email"
              contentLeft={<Mail fill="currentColor" />}
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Password"
              contentLeft={<Password fill="currentColor" />}
            />
            <Row justify="space-between">
              <Checkbox>
                <Text size={14}>Remember me</Text>
              </Checkbox>
              <Text size={14}>Forgot password?</Text>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onPress={closeHandler}>
              Close
            </Button>
            <Button auto onPress={closeHandler}>
              Sign in
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
