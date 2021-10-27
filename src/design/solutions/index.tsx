import React from 'react';
import { CardsWithImages, CardsWithImagesCases } from '../../data/cards-with-images.data';
import CardWithImages from '../cards-with-images';
import SolutionsCases from './solutions.cases';
import SolutionsProducts from './solutions.products';

import * as S from './styles'

interface SolutionsProps {
  session?: string;
}

const Solutions: React.FC<SolutionsProps> = ({session}) => session === 'products' ? <SolutionsProducts /> : <SolutionsCases />

export default Solutions;