export const useMessage = () => {
  const message = useState('message', () => '')

  const setMessage = (newMessage: string) => {
    message.value = newMessage
  }

  return {
    message,
    setMessage
  }
}