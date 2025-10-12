import { useTransform, MotionValue } from 'framer-motion';

export function useSectionTransforms(
  scrollYProgress: MotionValue<number>,
  totalSections: number
): { y: MotionValue<string>; opacity: MotionValue<number> }[] {
  const transforms: { y: MotionValue<string>; opacity: MotionValue<number> }[] = [];

  const sectionHeight = 1 / totalSections;

  for (let index = 0; index < totalSections; index++) {
   
    const start = sectionHeight * index;
    const end = start + sectionHeight;

    const y = useTransform(scrollYProgress, [start, end], ['50%', '0%']);
    const opacity = useTransform(
      scrollYProgress,
      [
        start + sectionHeight * 0.2,
        start + sectionHeight * 0.35,
        end - sectionHeight * 0.35,
        end - sectionHeight * 0.2,
      ],
      [0, 1, 1, 0]
    );

    transforms.push({ y, opacity });
  }

  return transforms;
}
