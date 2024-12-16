import { FooterContainer, FooterGraphicContainer, FooterInfos, SocialsList } from "./styles"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import twitter from "../../assets/twitter.svg"
import logo from "../../assets/logo.png"

export default function Footer() {
	return (
		<FooterContainer>
			<div className="container">
				<FooterGraphicContainer>
					<img src={logo} alt="EFOOD logo" />

					<SocialsList>
						<li>
							<a href="#" target="_blank">
								<img src={instagram} alt="Instagram logo" />
							</a>
						</li>
						<li>
							<a href="#" target="_blank">
								<img src={facebook} alt="Facebook logo" />
							</a>
						</li>
						<li>
							<a href="#" target="_blank">
								<img src={twitter} alt="Twitter logo" />
							</a>
						</li>
					</SocialsList>
				</FooterGraphicContainer>

				<FooterInfos>
					A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela
					entrega, qualidade dos produtos é toda do estabelecimento contratado.
				</FooterInfos>
			</div>
		</FooterContainer>
	)
}
