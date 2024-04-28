import { useState } from 'react';
import { Box, Button, Input, List, ListItem, Text, VStack, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaPlus, FaSun, FaMoon, FaTrash } from 'react-icons/fa';

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'gray.100');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
        isRound='true'
        size='lg'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />
      <Box w="100%" p={4} bg={bgColor} borderRadius="lg">
        <Text fontSize="2xl" fontWeight="bold" mb={4} color={textColor}>Todo App</Text>
        <Input
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={addTodo} mt={2}>
          Add Task
        </Button>
        <List spacing={3} mt={4}>
          {todos.map((todo, index) => (
            <ListItem key={index} bg="white" w="100%" p={4} boxShadow="md" borderRadius="lg" display="flex" justifyContent="space-between" alignItems="center">
              <Text>{todo}</Text>
              <IconButton icon={<FaTrash />} isRound='true' onClick={() => deleteTodo(index)} />
            </ListItem>
          ))}
        </List>
      </Box>
    </VStack>
  );
};

export default Index;