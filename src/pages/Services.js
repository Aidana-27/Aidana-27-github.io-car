import React from 'react'

const Services = () => {
    return (
        <div className='container'>
            <div className='services__wrapper p-10'>
                <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
                    <div class="flex flex-col items-center">
                        <h2 class="font-bold text-5xl mt-5 tracking-tight">
                            Авто услуги
                        </h2>
                        <p class="text-neutral-500 text-xl mt-3">
                            Все обявление
                        </p>
                    </div>
                    <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
                        <div class="py-5">
                            <details class="group">
                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span> Автозвук и сигнализация</span>
                                </summary>
                            </details>
                        </div>
                        <div class="py-5">
                            <details class="group">
                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span> Автоэлектрики</span>
                                </summary>
                            </details>
                        </div>
                        <div class="py-5">
                            <details class="group">
                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span> Кузовные и малярные работы</span>
                                </summary>
                            </details>
                        </div>
                        <div class="py-5">
                            <details class="group">
                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span> СТО, ремонт и обслуживание</span>
                                </summary>
                            </details>
                        </div>
                        <div class="py-5">
                            <details class="group">
                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span> Шумоизоляция </span>
                                </summary>
                            </details>
                        </div>
                        <div class="py-5">
                            <details class="group">
                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span> Эвакуатор </span>
                                </summary>
                            </details>
                        </div>
                        <div class="py-5">
                            <details class="group">
                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span>  Ремонт, тюнинг фар и оптики</span>
                                </summary>
                            </details>
                        </div>
                        <div class="py-5">
                            <details class="group">
                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span> Шиномонтаж</span>
                                </summary>
                            </details>
                        </div>
                        <div class="py-5">
                            <details class="group">
                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span>  Тонировка</span>
                                </summary>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services