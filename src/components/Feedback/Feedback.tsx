import { Dislike, Like } from 'assets';
import { useDispatch, useSelector } from 'react-redux';


import { actions } from 'store/feadback/feadbackSlice'; 
import { feadbackState } from 'store/feadback/selectors'; 
import { ButtonFlex, ButtonWrap, FeadbackWrapper, Quantity } from './styles';
import Button from 'components/Button';
import ButtonImg from 'components/ButtonImg/ButtonImg';

function Feadback() {
    const dispatch = useDispatch();
    const { likes, dislikes } = useSelector(feadbackState);

    return (
        <FeadbackWrapper>
            <ButtonFlex>
                <ButtonWrap>
                    <ButtonImg
                        onClick={() => dispatch(actions.incrementLikes())}
                        imageUrl={Like}
                        altText='Like'
                    />
                </ButtonWrap>
                <Quantity>
                    {likes}
                </Quantity>
            </ButtonFlex>
            <ButtonFlex>
                <ButtonWrap>
                    <ButtonImg
                        onClick={() => dispatch(actions.incrementDislikes())}
                        imageUrl={Dislike}
                        altText='Dislike'
                    />
                </ButtonWrap>
                <Quantity>
                    {dislikes}
                </Quantity>
            </ButtonFlex>
            <ButtonWrap>
                <Button name="Reset Results" onClick={() => dispatch(actions.resetResults())} />
            </ButtonWrap>
        </FeadbackWrapper>
    );
};

export default Feadback;