import {Container, Heading, Text} from '@chakra-ui/layout'
import {Select} from '@chakra-ui/select'
import { Suspense, useState } from 'react'
import { useRecoilValue, useSetRecoilState} from 'recoil'
import { weatherRequestIdAtom } from '../store/atoms/weatherRequestIdAtom'
import { userSelector } from '../store/selectors/userSelector'
import { weatherState } from '../store/selectors/weatherState'

const useRefetchWeather = (userId: number) => {
    const setRequestId = useSetRecoilState(weatherRequestIdAtom(userId))
    return () => setRequestId(id => id + 1)
}

const UserWeather = ({userId}: {userId: number}) => {
    const user = useRecoilValue(userSelector(userId))
    const weather = useRecoilValue(weatherState(userId))
    const refetch = useRefetchWeather(userId)
    return (
        <>
            <Text>
                <b>Weather for {user.address.city}:</b>  {weather}℃
            </Text>
            <Text onClick = {refetch}>(refresh weather)</Text>
        </>
        
    )
}
export const UserData = ({userId}: {userId: number}) => {
    const user = useRecoilValue(userSelector(userId))
    
    return (
        <div>
            <Heading as="h2" size="md" mb={1}>
                User data:
            </Heading>
            <Text>
                <b>Name:</b> {user.name}
            </Text>
            <Text>
                <b>Phone:</b>  {user.phone}
            </Text>
            <Suspense fallback={<div>Loading weather...</div>}>
                <UserWeather userId={userId}/>
            </Suspense>
        </div>
    )
}

export const Async = () => {
    const [userId, setUserId] = useState<undefined | number>(undefined)

    return (
        <Container py={10}>
            <Heading as="h1" mb={4}>
                View Profile
            </Heading>
            <Heading as="h2" size="md" mb={1}>
                Choose a user:
            </Heading>
            <Select
                placeholder="Choose a user"
                mb={4}
                value={userId}
                onChange={(event) => {
                    const value = event.target.value
                    setUserId(value ? parseInt(value) : undefined)
                }}
            >
                <option value="1">User 1</option>
                <option value="2">User 2</option>
                <option value="3">User 3</option>
            </Select>
            <Suspense fallback={<div>Loading...</div>}>
                {userId && <UserData userId={userId}/>}
            </Suspense>
            
        </Container>
    )
}

