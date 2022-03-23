import type {NextPage} from 'next';
import Section from '../components/organisms/Section';
import Value from '../components/atoms/Offers/Value';
import GeometricObject from '../components/atoms/Offers/GeometricObject';

const Offers: NextPage = () => {
	return (
		<>
			<Section className="my-8 py-8 flex flex-col lg:flex-row gap-4" style={{
				backgroundImage: 'url("/images/cat-background.svg")',
				backgroundSize: 'cover',
			}}>
				<div className="h-[400px]">
					<GeometricObject
						scale={2}
						shadowOffsetY={3}
					/>
				</div>
				<div className="flex flex-col gap-4">
					<h2>Offre 1 : Le petit audit</h2>
					<h3>Contenu</h3>
					<p>Lors de ce petit audit qui dure entre 1 et 2 jours, nous vous proposeront 3 axes majeures</p>
					<Value
						content="Une rencontre avec vos équipes pour identifier votre activité et quels sont les axes d'améliorations."
					/>
					<Value
						content="Une construction ensemble d'un plan d'actions pour les différents intervenants de votre entreprise."
					/>
					<h3>Pourquoi ?</h3>
					<h4>Des résultats</h4>
					<p>
						Nous vous aidons à créer un plan d&apos;action claire pour la suite de votre entreprise,
						et nous vous aidons même a organiser votre prévisionnel sur le budget future.
					</p>
					<h4>Un plus pour votre entreprise</h4>
					<p>
						Nous vous aidons à créer une vision commune pour motiver vos troupes et surtout réduire votre temps de développement.
						Vous pouvez ainsi vous lancer dans la suite en sachant parfaitement à quoi vous attendre.
					</p>
				</div>
			</Section>
			<Section className="my-8 py-8 flex flex-col lg:flex-row gap-4">
				<div className="flex flex-col gap-4">
					<h2>Offre 2 : Le grand accompagnement</h2>
					<p>
						Nous vous aidons à développer votre entreprise en internalisant le développement.
						Parce que nous savons par expérience qu&apos;un prestataire externe peut se reveler très cher pour votre
						entreprise, et qu&apos;une équipe interne vous permet permet d&apos;améliorer constamment votre activité et
						surtout d&apos;améliorer les performances de votre entreprise.
					</p>
					<h3>Contenu</h3>
					<p>
						Nous vous proposons le support d&apos;un CTO de Feldrise pour vous accompagner dans les changements de votre entreprise.
					</p>
					<Value
						content="Nous formons les personnes avec qui vous travaillez déjà pour intégrer une équipe de développeurs performants."
					/>
					<Value
						content="Si vous n'avez pas d'équipe, nous vous aidons dans le recrutement de vos futurs éléments clés (stagiaires,
						 apprantis, employés...) et bien sûr, nous les formons pour qu'ils soient rapidement opérationnels et efficaces."
					/>
				</div>
				<div className="flex flex-col gap-4">
					<div className="h-[400px]">
						<GeometricObject
							mesh="cylinder"
							scale={2}
							shadowOffsetY={3}
						/>
					</div>
					<p className="text-lg">
						La prestation coûte au total 3000€ par mois. Avec un investissement minimal vous pouvez
						rapidement avoir les résultats.
					</p>
				</div>
			</Section>
		</>
	);
};

export default Offers;
