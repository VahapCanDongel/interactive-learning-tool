import { Card, Text, Row } from "@nextui-org/react";

export default function ClassRoomCard() {
  return (
    <div>
      <Card isHoverable isPressable variant="bordered">
        <Card.Body
          css={{
            w: "200px",
            h: "200px",
          }}
        >
          <Row justify="center" alignItems="center">
            <Text>Cybersecurity</Text>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
