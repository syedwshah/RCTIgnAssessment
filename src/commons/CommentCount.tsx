import React from 'react';
import {Box, Text} from 'react-native-design-utility';

//there is an error in the server's json response:

export const CommentCount: React.FC<{id: string}> = ({id}) => {
  const [count, setCount] = React.useState<any>();
  const url = `https://ign-apis.herokuapp.com/${id}`;

  React.useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);

        const data = await res.json();
        console.log('count', data); //[SyntaxError: JSON Parse error: Unrecognized token '<']
        setCount(0);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [url]);

  return (
    <Box>
      <Text size="sm" bold>
        {count}
      </Text>
    </Box>
  );
};
