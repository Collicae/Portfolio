// components/Model.tsx
'use client'
import { useGLTF, Center } from '@react-three/drei'

interface ModelProps {
  path: string
}

export default function Model({ path }: ModelProps) {
  const { scene } = useGLTF(path)
  return (
    <Center>
    <primitive object={scene} />
  </Center>
  )
}