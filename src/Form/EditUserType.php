<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

use Doctrine\Common\Collections;

class EditUserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {                                                                                                                                                  
        $builder
            ->add('username',TextType::class,['required' => true])
            ->add('email',EmailType::class,['required' => true])            
            ->add('enable',CheckboxType::class,['required' => false])
            ->add('roles', ChoiceType::class, [
                        'choices' => [
                            'Utilisateur' => 'ROLE_USER',
                            'Administrateur' => 'ROLE_ADMIN',                            
                        ],
                        'expanded' => false,// si true repartie en 3 cases à cocher
                        'multiple' => true, // qui fournit les valeurs pour tableau
                        'label' => 'Rôles' 
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
