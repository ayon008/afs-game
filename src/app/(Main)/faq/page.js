import React from 'react';
import { morgana } from '../layout';
import Join from '@/Shared/Join';

const page = () => {
    const items = [
        {
            title: "Qu'est-ce que les AFS Games ?",
            description: "Les AFS Games sont une compétition nautique virtuelle internationale organisée par AFS. L'événement comprend des défis de Wingfoil, Windfoil Downwind Surf foil et Dockstart. Le but étant de passer le plus de temps à l’eau avec son foil AFS.",
            category: "general"
        },
        {
            title: "Qui peut participer aux AFS Games ?",
            description: "L’événement est uniquement ouvert aux clients de la marque AFS. Le client AFS est désigné par un pratiquant possédant au moins un foil AFS et l’utilisant dans le cadre de la compétition. Le choix de la planche et de la wing est libre.",
            category: "general"
        },
        {
            title: "Quelle est la période de la compétition ?",
            description: "Les AFS Games se dérouleront du lundi 30 septembre au dimanche 3 novembre.",
            category: "general"
        },
        {
            title: "Comment puis-je m'inscrire aux AFS Games ?",
            description: "L'inscription se fait en ligne sur notre site internet afs-foiling.fr ou afs-foiling.com. Remplissez le formulaire d'inscription et suivez les instructions pour finaliser votre participation. Le participant peut décider de s’inscrire aux disciplines de manière individuelle ou de participer uniquement au Waterman Crown. Il faudra justifier la participation en téléchargeant la facture de son foil sur la page de son profil.",
            category: "INSCRIPTION"
        },
        {
            title: "Que se passe-t-il après mon inscription ?",
            description: "Après votre inscription, vous recevrez un e-mail de confirmation avec des instructions détaillées sur la manière de soumettre vos performances et de suivre les classements en direct. Vous avez directement accès avec votre profil et à la plateforme vous permettant de charger vos sorties en foil.",
            category: "INSCRIPTION"
        },
        {
            title: "Y a-t-il des frais d'inscription ?",
            description: "Non, la participation aux AFS Games est gratuite.",
            category: "INSCRIPTION"
        },
        {
            title: "Quels sont les types d'épreuves disponibles ?",
            description: "Les AFS Games comprennent des épreuves de Wingfoil, Windfoil Downwind Surf foil et Dockstart. Chaque épreuve est représentée par un challenge de temps, dont le but est de cumuler les heures de session.",
            category: "COMPÉTITION ET CLASSEMENTS"
        },
        {
            title: "Comment soumettre mes performances ?",
            description: "Vous pouvez soumettre vos performances via notre plateforme en ligne en y téléchargeant les fichiers GPX de données de vos appareils de suivi (téléphone, montre GPS).",
            category: "COMPÉTITION ET CLASSEMENTS"
        },
        {
            title: "Comment les classements sont-ils établis ?",
            description: "Les classements sont basés sur les performances soumises, avec des podiums pour les meilleures distances, temps et vitesses dans chaque épreuve. Les classements sont mis à jour quasiment en temps réel sur notre site.",
            category: "COMPÉTITION ET CLASSEMENTS"
        },
        {
            title: "Y a-t-il des récompenses pour les gagnants ?",
            description: "Oui, les meilleurs participants recevront des récompenses en fonction de leurs performances. Les détails des prix seront annoncés sur notre site web.",
            category: "RÉCOMPENSES"
        },
        {
            title: "Comment mes données personnelles seront-elles utilisées ?",
            description: "Vos données personnelles seront utilisées pour gérer les inscriptions, suivre les performances, et communiquer avec vous. Elles seront protégées conformément à notre Politique de Protection des Données Personnelles.",
            category: "DONNÉES PERSONNELLES ET SÉCURITÉ"
        },
        {
            title: "Mes données seront-elles partagées avec des tiers ?",
            description: "Nous ne partageons pas vos données personnelles avec des tiers sans votre consentement, sauf dans le cadre de partenariats nécessaires à l'organisation de l'événement et en cas d'obligation légale.",
            category: "DONNÉES PERSONNELLES ET SÉCURITÉ"
        },
        {
            title: "Que faire en cas de problème technique sur la plateforme ?",
            description: "En cas de problème technique, contactez notre support technique via le Chat du site internet pour obtenir de l'aide avec nos conseillers. Nous nous efforcerons de résoudre le problème dans les plus brefs délais.",
            category: "PROBLÈMES TECHNIQUES ET SUPPORT"
        },
        {
            title: "Qui puis-je contacter pour des questions supplémentaires ?",
            description: "Pour toute question supplémentaire, vous pouvez nous contacter à l'adresse chloe.chaussy@foilandco.com.",
            category: "PROBLÈMES TECHNIQUES ET SUPPORT"
        }
    ];

    const generalItems = items?.filter(item => item.category === "general");
    const inscriptionItems = items?.filter(item => item.category === "INSCRIPTION");
    const competitionItems = items?.filter(item => item.category === "COMPÉTITION ET CLASSEMENTS");
    const recompenseItems = items?.filter(item => item.category === 'RÉCOMPENSES');
    const secutiteItems = items?.filter(item => item.category === "DONNÉES PERSONNELLES ET SÉCURITÉ");
    const problème = items?.filter(item => item.category === "PROBLÈMES TECHNIQUES ET SUPPORT");

    return (
        <div className=''>
            <div className='min-h-screen flex flex-col'>
                <div className='m-auto'>
                    <h1 className={`${morgana.className} text-center 2xl:text-9xl xl:text-7xl text-white uppercase`}>FAQ</h1>
                </div>
            </div>
            <div className='bg-white p-20 rounded-t-[50px]'>
                <h2 className={`${morgana.className} uppercase text-center 2xl:text-7xl xl:text-5xl`}>GÉNÉRAL</h2>
                <div className='2xl:px-20 xl:px-14 px-6 grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 2xl:mt-24 xl:mt-16 mt-10 2xl:gap-6 xl:gap-4'>
                    {
                        generalItems?.map((item, i) => {
                            return (
                                <div style={{
                                    boxShadow: "0px 5px 16px 0px rgba(8, 15, 52, 0.06)"
                                }} key={i} className="collapse rounded-2xl bg-[#FFF] 2xl:px-7 2xl:py-10 xl:px-4 xl:py-7 h-fit">
                                    <input type="checkbox" id={`toggle${i}`} className="hidden" />
                                    <label htmlFor={`toggle${i}`} className="collapse-title cursor-pointer 2xl:text-[22px] xl:text-lg text-sm font-medium flex items-center justify-between">
                                        {item.title}
                                        <span className="icon-container">
                                            <svg className="icon icon-plus" xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                                <rect x="0.802734" y="0.493774" width="45.7867" height="45.7867" rx="8" fill="#FFE500" />
                                                <path d="M23.5928 13.3075C22.9576 13.3075 22.4428 13.8223 22.4428 14.4575V32.3168C22.4428 32.9519 22.9576 33.4668 23.5928 33.4668H23.7994C24.4345 33.4668 24.9494 32.9519 24.9494 32.3168V14.4575C24.9494 13.8223 24.4345 13.3075 23.7994 13.3075H23.5928Z" fill="black" stroke="#6F6C90" stroke-width="0.3" stroke-linecap="round" />
                                                <path d="M14.7666 22.1338C14.1315 22.1338 13.6166 22.6487 13.6166 23.2838V23.4904C13.6166 24.1255 14.1315 24.6404 14.7666 24.6404H32.6259C33.261 24.6404 33.7759 24.1255 33.7759 23.4904V23.2838C33.7759 22.6487 33.261 22.1338 32.6259 22.1338H14.7666Z" fill="black" stroke="#6F6C90" stroke-width="0.3" stroke-linecap="round" />
                                            </svg>
                                            <svg className="icon icon-minus hidden" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                                <rect x="0.195312" y="0.131775" width="45.7867" height="45.7867" rx="8" fill="#FFE500" />
                                                <path d="M14.1582 21.7719C13.5231 21.7719 13.0082 22.2867 13.0082 22.9219V23.1285C13.0082 23.7636 13.5231 24.2785 14.1582 24.2785H32.0175C32.6526 24.2785 33.1675 23.7636 33.1675 23.1285V22.9219C33.1675 22.2867 32.6526 21.7719 32.0175 21.7719H14.1582Z" fill="black" stroke="#6F6C90" stroke-width="0.3" stroke-linecap="round" />
                                            </svg>
                                        </span>
                                    </label>

                                    <div className="collapse-content">
                                        <p className='2xl:text-[22px] xl:text-base text-xs mt-2 text-[#00000080]'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <h2 className={`${morgana.className} uppercase text-center 2xl:text-7xl xl:text-5xl 2xl:mt-20 xl:mt-14 mt-10`}>INSCRIPTION</h2>
                <div className='2xl:px-20 xl:px-14 px-6 grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 2xl:mt-24 xl:mt-16 mt-10 2xl:gap-6 xl:gap-4'>
                    {
                        inscriptionItems?.map((item, i) => {
                            return (
                                <div style={{
                                    boxShadow: "0px 5px 16px 0px rgba(8, 15, 52, 0.06)"
                                }} key={i} className="collapse rounded-2xl bg-[#FFF] 2xl:px-7 2xl:py-10 xl:px-4 xl:py-7 h-fit">
                                    <input type="checkbox" id={`toggle${item.title}`} className="hidden" />
                                    <label htmlFor={`toggle${item.title}`} className="collapse-title cursor-pointer 2xl:text-[22px] xl:text-lg text-sm font-medium flex items-center justify-between">
                                        {item.title}
                                        <span className="icon-container">
                                            <svg className="icon icon-plus" xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                                <rect x="0.802734" y="0.493774" width="45.7867" height="45.7867" rx="8" fill="#FFE500" />
                                                <path d="M23.5928 13.3075C22.9576 13.3075 22.4428 13.8223 22.4428 14.4575V32.3168C22.4428 32.9519 22.9576 33.4668 23.5928 33.4668H23.7994C24.4345 33.4668 24.9494 32.9519 24.9494 32.3168V14.4575C24.9494 13.8223 24.4345 13.3075 23.7994 13.3075H23.5928Z" fill="black" stroke="#6F6C90" stroke-width="0.3" stroke-linecap="round" />
                                                <path d="M14.7666 22.1338C14.1315 22.1338 13.6166 22.6487 13.6166 23.2838V23.4904C13.6166 24.1255 14.1315 24.6404 14.7666 24.6404H32.6259C33.261 24.6404 33.7759 24.1255 33.7759 23.4904V23.2838C33.7759 22.6487 33.261 22.1338 32.6259 22.1338H14.7666Z" fill="black" stroke="#6F6C90" stroke-width="0.3" stroke-linecap="round" />
                                            </svg>
                                            <svg className="icon icon-minus hidden" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                                <rect x="0.195312" y="0.131775" width="45.7867" height="45.7867" rx="8" fill="#FFE500" />
                                                <path d="M14.1582 21.7719C13.5231 21.7719 13.0082 22.2867 13.0082 22.9219V23.1285C13.0082 23.7636 13.5231 24.2785 14.1582 24.2785H32.0175C32.6526 24.2785 33.1675 23.7636 33.1675 23.1285V22.9219C33.1675 22.2867 32.6526 21.7719 32.0175 21.7719H14.1582Z" fill="black" stroke="#6F6C90" stroke-width="0.3" stroke-linecap="round" />
                                            </svg>
                                        </span>
                                    </label>

                                    <div className="collapse-content">
                                        <p className='2xl:text-[22px] xl:text-base text-xs mt-2 text-[#00000080]'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <h2 className={`${morgana.className} uppercase text-center 2xl:text-7xl xl:text-5xl 2xl:mt-20 xl:mt-14 mt-10`}>COMPÉTITION ET CLASSEMENTS</h2>
                <div className='2xl:px-20 xl:px-14 px-6 grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 2xl:mt-24 xl:mt-16 mt-10 2xl:gap-6 xl:gap-4'>
                    {
                        competitionItems?.map((item, i) => {
                            return (
                                <div style={{
                                    boxShadow: "0px 5px 16px 0px rgba(8, 15, 52, 0.06)"
                                }} key={i} className="collapse rounded-2xl bg-[#FFF] 2xl:px-7 2xl:py-10 xl:px-4 xl:py-7 h-fit">
                                    <input type="checkbox" id={`toggle${item.title}`} className="hidden" />
                                    <label htmlFor={`toggle${item.title}`} className="collapse-title cursor-pointer 2xl:text-[22px] xl:text-lg text-sm font-medium flex items-center justify-between">
                                        {item.title}
                                        <span className="icon-container">
                                            <svg className="icon icon-plus" xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                                <rect x="0.802734" y="0.493774" width="45.7867" height="45.7867" rx="8" fill="#FFE500" />
                                                <path d="M23.5928 13.3075C22.9576 13.3075 22.4428 13.8223 22.4428 14.4575V32.3168C22.4428 32.9519 22.9576 33.4668 23.5928 33.4668H23.7994C24.4345 33.4668 24.9494 32.9519 24.9494 32.3168V14.4575C24.9494 13.8223 24.4345 13.3075 23.7994 13.3075H23.5928Z" fill="black" stroke="#6F6C90" stroke-width="0.3" stroke-linecap="round" />
                                                <path d="M14.7666 22.1338C14.1315 22.1338 13.6166 22.6487 13.6166 23.2838V23.4904C13.6166 24.1255 14.1315 24.6404 14.7666 24.6404H32.6259C33.261 24.6404 33.7759 24.1255 33.7759 23.4904V23.2838C33.7759 22.6487 33.261 22.1338 32.6259 22.1338H14.7666Z" fill="black" stroke="#6F6C90" stroke-width="0.3" stroke-linecap="round" />
                                            </svg>
                                            <svg className="icon icon-minus hidden" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                                <rect x="0.195312" y="0.131775" width="45.7867" height="45.7867" rx="8" fill="#FFE500" />
                                                <path d="M14.1582 21.7719C13.5231 21.7719 13.0082 22.2867 13.0082 22.9219V23.1285C13.0082 23.7636 13.5231 24.2785 14.1582 24.2785H32.0175C32.6526 24.2785 33.1675 23.7636 33.1675 23.1285V22.9219C33.1675 22.2867 32.6526 21.7719 32.0175 21.7719H14.1582Z" fill="black" stroke="#6F6C90" stroke-width="0.3" stroke-linecap="round" />
                                            </svg>
                                        </span>
                                    </label>

                                    <div className="collapse-content">
                                        <p className='2xl:text-[22px] xl:text-base text-xs mt-2 text-[#00000080]'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <h2 className={`${morgana.className} uppercase text-center 2xl:text-7xl xl:text-5xl 2xl:mt-20 xl:mt-14 mt-10`}>RÉCOMPENSES</h2>
                <div className='2xl:px-20 xl:px-14 px-6 grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 2xl:mt-24 xl:mt-16 mt-10 2xl:gap-6 xl:gap-4'>
                    {
                        recompenseItems?.map((item, i) => {
                            return (
                                <div style={{
                                    boxShadow: "0px 5px 16px 0px rgba(8, 15, 52, 0.06)"
                                }} key={i} className="collapse rounded-2xl bg-[#FFF] 2xl:px-7 2xl:py-10 xl:px-4 xl:py-7 h-fit">
                                    <input type="checkbox" id={`toggle${item.title}`} className="hidden" />
                                    <label htmlFor={`toggle${item.title}`} className="collapse-title cursor-pointer 2xl:text-[22px] xl:text-lg text-sm font-medium flex items-center justify-between">
                                        {item.title}
                                        <span className="icon-container">
                                            <svg className="icon icon-plus" xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                                <rect x="0.802734" y="0.493774" width="45.7867" height="45.7867" rx="8" fill="#FFE500" />
                                                <path d="M23.5928 13.3075C22.9576 13.3075 22.4428 13.8223 22.4428 14.4575V32.3168C22.4428 32.9519 22.9576 33.4668 23.5928 33.4668H23.7994C24.4345 33.4668 24.9494 32.9519 24.9494 32.3168V14.4575C24.9494 13.8223 24.4345 13.3075 23.7994 13.3075H23.5928Z" fill="black" stroke="#6F6C90" stroke-width="0.3" stroke-linecap="round" />
                                                <path d="M14.7666 22.1338C14.1315 22.1338 13.6166 22.6487 13.6166 23.2838V23.4904C13.6166 24.1255 14.1315 24.6404 14.7666 24.6404H32.6259C33.261 24.6404 33.7759 24.1255 33.7759 23.4904V23.2838C33.7759 22.6487 33.261 22.1338 32.6259 22.1338H14.7666Z" fill="black" stroke="#6F6C90" stroke-width="0.3" stroke-linecap="round" />
                                            </svg>
                                            <svg className="icon icon-minus hidden" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                                <rect x="0.195312" y="0.131775" width="45.7867" height="45.7867" rx="8" fill="#FFE500" />
                                                <path d="M14.1582 21.7719C13.5231 21.7719 13.0082 22.2867 13.0082 22.9219V23.1285C13.0082 23.7636 13.5231 24.2785 14.1582 24.2785H32.0175C32.6526 24.2785 33.1675 23.7636 33.1675 23.1285V22.9219C33.1675 22.2867 32.6526 21.7719 32.0175 21.7719H14.1582Z" fill="black" stroke="#6F6C90" stroke-width="0.3" stroke-linecap="round" />
                                            </svg>
                                        </span>
                                    </label>

                                    <div className="collapse-content">
                                        <p className='2xl:text-[22px] xl:text-base text-xs mt-2 text-[#00000080]'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <h2 className={`${morgana.className} uppercase text-center 2xl:text-7xl xl:text-5xl 2xl:mt-20 xl:mt-14 mt-10`}>DONNÉES PERSONNELLES ET SÉCURITÉ</h2>
                <div className='2xl:px-20 xl:px-14 px-6 grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 2xl:mt-24 xl:mt-16 mt-10 2xl:gap-6 xl:gap-4'>
                    {
                        secutiteItems?.map((item, i) => {
                            return (
                                <div style={{
                                    boxShadow: "0px 5px 16px 0px rgba(8, 15, 52, 0.06)"
                                }} key={i} className="collapse rounded-2xl bg-[#FFF] 2xl:px-7 2xl:py-10 xl:px-4 xl:py-7 h-fit">
                                    <input type="checkbox" id={`toggle${item.title}`} className="hidden" />
                                    <label htmlFor={`toggle${item.title}`} className="collapse-title cursor-pointer 2xl:text-[22px] xl:text-lg text-sm font-medium flex items-center justify-between">
                                        {item.title}
                                        <span className="icon-container">
                                            <svg className="icon icon-plus" xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                                <rect x="0.802734" y="0.493774" width="45.7867" height="45.7867" rx="8" fill="#FFE500" />
                                                <path d="M23.5928 13.3075C22.9576 13.3075 22.4428 13.8223 22.4428 14.4575V32.3168C22.4428 32.9519 22.9576 33.4668 23.5928 33.4668H23.7994C24.4345 33.4668 24.9494 32.9519 24.9494 32.3168V14.4575C24.9494 13.8223 24.4345 13.3075 23.7994 13.3075H23.5928Z" fill="black" stroke="#6F6C90" stroke-width="0.3" stroke-linecap="round" />
                                                <path d="M14.7666 22.1338C14.1315 22.1338 13.6166 22.6487 13.6166 23.2838V23.4904C13.6166 24.1255 14.1315 24.6404 14.7666 24.6404H32.6259C33.261 24.6404 33.7759 24.1255 33.7759 23.4904V23.2838C33.7759 22.6487 33.261 22.1338 32.6259 22.1338H14.7666Z" fill="black" stroke="#6F6C90" stroke-width="0.3" stroke-linecap="round" />
                                            </svg>
                                            <svg className="icon icon-minus hidden" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                                <rect x="0.195312" y="0.131775" width="45.7867" height="45.7867" rx="8" fill="#FFE500" />
                                                <path d="M14.1582 21.7719C13.5231 21.7719 13.0082 22.2867 13.0082 22.9219V23.1285C13.0082 23.7636 13.5231 24.2785 14.1582 24.2785H32.0175C32.6526 24.2785 33.1675 23.7636 33.1675 23.1285V22.9219C33.1675 22.2867 32.6526 21.7719 32.0175 21.7719H14.1582Z" fill="black" stroke="#6F6C90" stroke-width="0.3" stroke-linecap="round" />
                                            </svg>
                                        </span>
                                    </label>

                                    <div className="collapse-content">
                                        <p className='2xl:text-[22px] xl:text-base text-xs mt-2 text-[#00000080]'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <h2 className={`${morgana.className} uppercase text-center 2xl:text-7xl xl:text-5xl 2xl:mt-20 xl:mt-14 mt-10`}>PROBLÈMES TECHNIQUES ET SUPPORT</h2>
                <div className='2xl:px-20 xl:px-14 px-6 grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 2xl:mt-24 xl:mt-16 mt-10 2xl:gap-6 xl:gap-4'>
                    {
                        problème?.map((item, i) => {
                            return (
                                <div style={{
                                    boxShadow: "0px 5px 16px 0px rgba(8, 15, 52, 0.06)"
                                }} key={i} className="collapse rounded-2xl bg-[#FFF] 2xl:px-7 2xl:py-10 xl:px-4 xl:py-7 h-fit">
                                    <input type="checkbox" id={`toggle${item.title}`} className="hidden" />
                                    <label htmlFor={`toggle${item.title}`} className="collapse-title cursor-pointer 2xl:text-[22px] xl:text-lg text-sm font-medium flex items-center justify-between">
                                        {item.title}
                                        <span className="icon-container">
                                            <svg className="icon icon-plus" xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                                <rect x="0.802734" y="0.493774" width="45.7867" height="45.7867" rx="8" fill="#FFE500" />
                                                <path d="M23.5928 13.3075C22.9576 13.3075 22.4428 13.8223 22.4428 14.4575V32.3168C22.4428 32.9519 22.9576 33.4668 23.5928 33.4668H23.7994C24.4345 33.4668 24.9494 32.9519 24.9494 32.3168V14.4575C24.9494 13.8223 24.4345 13.3075 23.7994 13.3075H23.5928Z" fill="black" stroke="#6F6C90" stroke-width="0.3" stroke-linecap="round" />
                                                <path d="M14.7666 22.1338C14.1315 22.1338 13.6166 22.6487 13.6166 23.2838V23.4904C13.6166 24.1255 14.1315 24.6404 14.7666 24.6404H32.6259C33.261 24.6404 33.7759 24.1255 33.7759 23.4904V23.2838C33.7759 22.6487 33.261 22.1338 32.6259 22.1338H14.7666Z" fill="black" stroke="#6F6C90" stroke-width="0.3" stroke-linecap="round" />
                                            </svg>
                                            <svg className="icon icon-minus hidden" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                                <rect x="0.195312" y="0.131775" width="45.7867" height="45.7867" rx="8" fill="#FFE500" />
                                                <path d="M14.1582 21.7719C13.5231 21.7719 13.0082 22.2867 13.0082 22.9219V23.1285C13.0082 23.7636 13.5231 24.2785 14.1582 24.2785H32.0175C32.6526 24.2785 33.1675 23.7636 33.1675 23.1285V22.9219C33.1675 22.2867 32.6526 21.7719 32.0175 21.7719H14.1582Z" fill="black" stroke="#6F6C90" stroke-width="0.3" stroke-linecap="round" />
                                            </svg>
                                        </span>
                                    </label>

                                    <div className="collapse-content">
                                        <p className='2xl:text-[22px] xl:text-base text-xs mt-2 text-[#00000080]'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Join />
        </div>
    );
};

export default page;